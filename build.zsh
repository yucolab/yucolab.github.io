#!/usr/local/bin/zsh

#/////////////////////////////////////////////
function banner
{
  message="$1"
  line="------------------------------"
    
    echo "$line"
    echo "$message"
    echo "$line"
}
#/////////////////////////////////////////////

banner "change into the dir gatsby"
cd gatsby

banner "start a new build"
npm run build

banner "sync the public folder to docs"
npm run sync

banner "move back to the script dir"
cd -

banner "copy CNAME to docs/"
cp CNAME ./docs/

banner "done ~"

