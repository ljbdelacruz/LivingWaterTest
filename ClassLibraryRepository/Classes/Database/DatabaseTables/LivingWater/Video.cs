using System;
namespace ClassLibraryRepository
{
	public class Video
	{
		public int Id { get; set; }
		public int news_id { get; set; }
		public string title { get; set; }
		public string design{ get;set; }
		public string type { get; set; }
		public double width { get; set; }
		public double height { get; set; }
		public string source { get; set; }
		public string thumbnail { get; set; }
		public int frameborder { get; set; }
        public int page_id { get; set; }

		public Video(){ 

		}
		public Video(int nId, int nNews_id, string nTitle, string nDesign, string nType, double nWidth, double nHeight, string nSource, string nThumbnail ,int nFrameBorder)
		{
			this.Id = nId;
			this.news_id = nNews_id;
			this.title = nTitle;
			this.design = nDesign;
			this.type = nType;
			this.width = nWidth;
			this.height = nHeight;
			this.source = nSource;
			this.thumbnail = nThumbnail;
			this.frameborder = nFrameBorder;
		}


	}
}

