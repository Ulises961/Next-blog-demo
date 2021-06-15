import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


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