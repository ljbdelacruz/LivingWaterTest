using System;
using System.Collections.Generic;

namespace ClassLibraryRepository
{
	public class Products : InformationDisplay
	{
		#region properties
		public int id { get; set; }
		public string productName { get; set; }
		public double productPrice { get; set; }
		public int numtype { get; set; } //integer to identify which type of product is it
		public string stringType { get; set; } //string to display in the filter on which product type is it
        public List<Images> images;
        public List<Video> videos;
		#endregion

		#region constructors
		public Products() { 
		}
		public Products(int nId, string nProductName, double nProductPrice, int nNumType, string nStringType ,string title, string information)
					   :base(title, information)
		{
			this.id = nId;
			this.productName = nProductName;
			this.productPrice = nProductPrice;
			this.numtype = nNumType;
			this.stringType = nStringType;
            this.images = new List<Images>();
            this.videos = new List<Video>();
		}
        #endregion
        public void AppendImages(Images img) {
            this.images.Add(img);
        }
        public void AppendVideo(Video vid) {
            this.videos.Add(vid);
        }
	}
}

