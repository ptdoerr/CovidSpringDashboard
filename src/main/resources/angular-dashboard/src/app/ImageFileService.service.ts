import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  imageDir = "C:/Users/phild/Documents/GitLab/COVIDdashboard/data/map-images";


  constructor() { }


  /*
@GetMapping("/maps-list")
	public String mapsList() {
		String[] pathnames = new String[] { "No Files Found"};
		Gson gson = new Gson();


		try {
			File f = new File(imageDir);
			System.out.printf("dir = " +f.getPath());
			System.out.printf("files = " +f.list());
			pathnames = f.list();
			
		} catch (Exception e) {
			pathnames[0] = "No Files Found";
		}

		if(pathnames != null) {
			return gson.toJson(pathnames);
		} else {
			return gson.toJson("No Files Found");
		}	
	}

	@GetMapping("/map-image-file")
	@ResponseBody
	public ResponseEntity<InputStreamResource> mapImageFile(@RequestParam(value = "fname") String fname) {
		MediaType contentType = MediaType.IMAGE_JPEG;
		FileInputStream in = null;
		System.out.println("Image filename: " +fname);


		String imagePath = imageDir +"/" +fname;
		System.out.println("Looking for image: " +imagePath);
		
		try {
			in = new FileInputStream(imagePath);
		} catch (FileNotFoundException ex) {
			System.err.println(imagePath +": Not Found");
		}

		if(in != null) {
			return ResponseEntity.ok()
      			.contentType(contentType)
      			.body(new InputStreamResource(in));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}

  */
}
