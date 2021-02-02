export class Quotes {
  showAuthor: boolean;
  constructor(
      public id: number,
      public text: string,
      public author: string,
      public poster: string,
      public time: Date,
    ) {
        this.showAuthor = false;
     }
}
