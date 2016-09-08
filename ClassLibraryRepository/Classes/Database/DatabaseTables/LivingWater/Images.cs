using System;
namespace ClassLibraryRepository
{
	public class Images
	{
		#region properties
		public int id { get; set; }
		public string image { get; set; }
		public string path { get; set; }
		public int page_id { get; set; }
		public double width { get; set; }
		public double height { get; set; }
		#endregion

		#region constructor
		public Images()
		{
		}
		public Images(int nId, string nImage, string nPath, int nPage_id, double nWidth, double nHeight) {
			this.id = nId;
			this.image = nImage;
			this.path = nPath;
			this.page_id = nPage_id;
			this.width = nWidth;
			this.height = nHeight;
		}
		#endregion
	}
}

