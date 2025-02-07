import { json } from '@sveltejs/kit'
import fontNames from '../../fontNames.json';

export function GET({url}){
    const name = url.searchParams.get('name');
    const count = url.searchParams.get('count') ?? 5;
    let found = 0
    const result = fontNames.filter(fn => {const res = found < count && fn.toLowerCase().indexOf(name)>-1; if(res) found++; return res})
    return json(result)
}