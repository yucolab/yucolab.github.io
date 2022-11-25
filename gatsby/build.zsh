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

banner "do initial install"
npm i

banner "start a new build"
npm run build

banner "sync the gatsby build output to docs the public folder"
npm run sync

banner "copy CNAME to docs/"
npm run copy

banner "done ~"

