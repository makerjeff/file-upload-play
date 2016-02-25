#File Upload Play
File upload server.

### Based on these tutorials:
- [File Uploads Using Node.JS](https://codeforgeek.com/2014/11/file-uploads-using-node-js/)
- [npm multer](https://www.npmjs.com/package/multer)
- [multer 'Disk Storage' section](https://www.npmjs.com/package/multer#diskstorage)

## Notes

**var storage = multer.diskStorage({destination: function(request, file, callback), filename: function(request, file, 
callback});** 
- creates a new disk storage object.

** NOTE: file names are not appended by Multer. Must provide full filename **

- must use ' enctype="multipart/form-data" ' in form.





