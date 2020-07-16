export class ProductModel{
    // constructor()
    constructor(
     // public productObj:string,
      public productId:number,
      public productName:string,
      public productCode:string,
      public releaseDate:string,
      public description:string,
      public price:number,
      public starRating:number,
        public imageUrl:string){}    
}