import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostData(){

    const fileNames = fs.readdirSync(postDirectory);
    const allPostData = fileNames.map( fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,'UTF8');
        const matterResult = matter(fileContents);

        return  { id, ...matterResult.data}
    });
    return allPostData.sort(({date:a}, {date:b}) => { 
        if ( a<b){
            return 1;
        
        }else if (a >b) {
            return -1;
        }else {
            return 0;
        }
    })
}

export function getAllPostIds(){

    const fileNames = fs.readdirSync(postDirectory);

    return fileNames.map(fileName => {
        return {
            params: {id: fileName.replace(/\.md$/,'')}
        }
    });
}

export async function getPostData(id){

    const fullPath = path.join(postDirectory, `${id}.md`);

    const fileContents = fs.readFileSync(fullPath, 'UTF-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return { id,contentHtml, ...matterResult.data}
}