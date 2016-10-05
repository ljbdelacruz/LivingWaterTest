using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class News
	{
		#region properties
		public int Id { get; set; }
		public string title { get; set;}
		public string content { get; set; }
        public string datePublished { get; set; }
		public List<Images> images;
		public List<Video> videos;
		public List<Buttons> buttons;
		#endregion
		public News()
		{
			
		}
		public News(int nId, string nTitle, string nContent) {
			this.Id = nId;
			this.title = nTitle;
			this.content = nContent;
			images = new List<Images>();
			videos = new List<Video>();
			buttons = new List<Buttons>();
		}

		public void appendImages(Images img) {
			this.images.Add(img);
		}
		public void appendVideo(Video vid) {
			this.videos.Add(vid);
		}
		public void appendButtons(Buttons bt) {
			this.buttons.Add(bt);
		}

	}
}

