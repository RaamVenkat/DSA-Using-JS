str = "aecBDbA";

function sort(str,i,j){
    str = str.split('');
    temp = str[i]
    str[i] = str[j]
    str[j] = temp
    str = str.join('')
    return str
}

for(i=0;i<str.length;i++){
    for(j=i+1;j<str.length;j++){
        if(str.charAt(i)>='a' && str.charAt(j)>='a'){
            if(str.charAt(i)>str.charAt(j))
            {
                str = sort(str,i,j)
            }
        }
        else if(str.charAt(i)<='Z' && str.charAt(j)<='Z'){
            if(str.charAt(i)>str.charAt(j))
            {
                str = sort(str,i,j)
            }
        }
    }
}

console.log(str)