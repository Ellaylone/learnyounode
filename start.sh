#!/bin/bash
current=${PWD}
for i in {1..13..1}
         do
             mkdir $current/$i
             echo "" >> $current/$i/$i.js
done
