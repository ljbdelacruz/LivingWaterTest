using System;
using System.Collections.Generic;

namespace ClassLibraryRepository.Classes.Database.OSS
{
	public class News
	{
		public int id { get; set; }
		public string title { get; set; }
		public string content { get; set; }
		public List<Images> image;
		public List<Video> video;
		public List<Buttons> buttons;

		public News(int nId, string nTitle, string nContent)
		{
			this.id = nId;
			this.title = nTitle;
			this.content = nContent;
		}
		public void appendImage(Images img) {
			this.image.Add(img);
		}
		public void appendVideo(Video vid) {
			this.video.Add(vid);
		}
		public void appendButton(Buttons butt) {
			this.buttons.Add(butt);
		}


	}
}

