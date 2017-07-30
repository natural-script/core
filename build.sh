#!/bin/bash

echo "        ___________________                                             "
echo "       / / ___/_  __/ ____/                                             "
echo "  __  / /\__ \ / / / __/                                                "
echo " / /_/ /___/ // / / /___                                                "
echo " \____//____////_/////_/___    __  __________       ______  ____  __ __ "
echo "           / ____/ __ \/   |  /  |/  / ____/ |     / / __ \/ __ \/ //_/ "
echo "          / /_  / /_/ / /| | / /|_/ / __/  | | /| / / / / / /_/ / ,<    "
echo "         / __/ / _, _/ ___ |/ /  / / /___  | |/ |/ / /_/ / _, _/ /| |   "
echo "        /_/   /_/ |_/_/  |_/_/  /_/_____/  |__/|__/\____/_/ |_/_/ |_|   "
echo "                                                                        "

echo " Starting building Jste Framework "

dir=$(cd -P -- "$(dirname -- "$0")" && rm -rf ./dist/* && vulcanize ./src/Res.html  --strip-comments --inline-scripts --inline-css > ./dist/index.html)

echo " Jste Framework has been built properly ;) "
