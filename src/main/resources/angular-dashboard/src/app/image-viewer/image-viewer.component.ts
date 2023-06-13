import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { DomSanitizer } from '@angular/platform-browser';

//import { FILES_LIST } from '../files-list';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {

  image_files: String[] = [];
  selectedFile = "";
  imageUrl: any;
  imageBlob = null;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) {}

  getFilesList(): void {
    //this.image_files = this.imageService.getFilesList();
    this.imageService.getFilesList().subscribe(image_files => this.image_files = image_files);
  }

  getImage(fname: string): void {

    this.imageService.getMapImage(fname).subscribe(imageBlob => {
      imageBlob = imageBlob

      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageBlob))
    })
  }

  onSelect(value: string): void {
    this.selectedFile = value;

    this.getImage(value);
  }

  ngOnInit(): void {
    this.getFilesList();
  }

}
