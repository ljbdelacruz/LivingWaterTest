using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;


namespace ClassLibraryRepository
{
	public class NewsManager
	{
		public List<News> news;

		public NewsManager()
		{
            news = new List<News>();
            init();
		}
        //this one serves as a temporary data substitute
        public void init() {
            news.Add(new News(1, "Announcing Our New Product", "This New Product is priceless and it will  asldkajsdlkasjdklasdjaklsdjaslkdjaskldjaslkdjasdklasjdklasjdklasdjaklsdjlkasjdlaksjdlkasdjlkasjdlkasjdklasjdlasj                                     asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
            news[0].appendImages(new Images(1, "/Assets/images/etc/img2.jpg", "", 1, 300, 300));
            news[0].appendImages(new Images(2, "/Assets/images/etc/img3.jpg", "", 1, 300, 300));
            news[0].appendImages(new Images(3, "/Assets/images/etc/img4.jpg", "", 1, 300, 300));
            news[0].appendImages(new Images(4, "/Assets/images/etc/img5.jpg", "", 1, 300, 300));
            news[0].appendImages(new Images(5, "/Assets/images/etc/img1.jpg", "", 1, 300, 300));
            news[0].appendVideo(new Video(1, 1, "Youtube video player", "youtube-player", "text/html", 300, 300, "https://www.youtube.com/embed/ZL6BP8ss-5Q", "http://img.youtube.com/vi/ZL6BP8ss-5Q/default.jpg", 0));
            news[0].appendVideo(new Video(1, 1, "Youtube video player", "youtube-player", "text/html", 300, 300, "https://www.youtube.com/embed/ZL6BP8ss-5Q", "http://img.youtube.com/vi/ZL6BP8ss-5Q/default.jpg", 0));
            news[0].appendButtons(new Buttons(1, "Get Started", "#"));
        }
		public void loadData() {
			//loads all news from database and into news list
		}
		//create a filter
	}
}

