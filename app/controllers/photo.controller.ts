import { Router, Request, Response } from 'express';
//import { PhotoDao, IPhotoInfo } from '../models/PhotoDao';
import { Config } from '../config';

// const endpoint = Config.endpoint;  
// const masterKey = Config.masterKey;

const azureStoreConnectionString = Config.azureStoreConnectionString;

var multer = require('multer')

const upload = multer({
  dest: 'uploads/' 
}); 

const router: Router = Router();

router.post('/', upload.single('image'),  async (req: Request, res: Response) => {  
  
  console.log(req.file.filename);
  res.send({
	filename : req.file.destination + req.file.originalname	  
  });
  
})

// Get by photo name for editing  
router.get('/:photoId', async (req: Request, res: Response) => {
  
  let { photoId } = req.params;
  console.log('get user photos ' + photoId);
  
  //let result = await photoProvider.getPhoto(photoId);
  //console.log(result);
  res.send('user photos');
});


// Export the express.Router() instance to be used by server.ts
export const PhotoController: Router = router;