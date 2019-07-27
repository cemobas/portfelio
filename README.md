# Portfelio

A personal accountant to organize expenses. It aims to introduce basic NodeJS features.

## How to run

There are different node processes to run in this project, some used together.

node <process_name>

## Processes

shopper-v1: Asks which shop you've visited today and what you've bought. You have to run with --user <user_name> --id <your_id>.

shopper-v2: Lists down shopping info based on built-in static data.

shopper-spawn: Runs shopper-v2 using spawn function (child_process).

shopper-exec: Runs shopper-v2 using exec function (child_process).

shop-reader: Reads files under files folder.
shop-writer: Creates a directory and a file in it.
shop-archiver: Archives files created by shop-writer by copying and renaming them into a new directory and removing the old one. 
shop-remover: Removes file created by shop-writer.

shop-bigdata-writer: Creates a file with massive data, which would better be viewed by stream (in chunks).
shop-bigdata-stream: Reads the file in chunks created by shop-bigdata-writer.
