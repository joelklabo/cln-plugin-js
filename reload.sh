#!/usr/bin/env bash 

plugin_path=$(pwd)/main.js
L1_CLI='lightning-cli --lightning-dir=/tmp/l1-regtest'

if [[ -n $($L1_CLI plugin list | rg $plugin_path) ]]; then
     $L1_CLI plugin stop $plugin_path
fi

$L1_CLI plugin start $plugin_path