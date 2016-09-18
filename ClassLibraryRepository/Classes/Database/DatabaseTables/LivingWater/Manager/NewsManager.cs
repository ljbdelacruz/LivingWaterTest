using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Util;

namespace ClassLibraryRepository
{
	public class NewsManager
	{
		public List<News> news;
        public DatabaseHandler dh;
        public DatabaseQuery dq;

		public NewsManager()
		{
            news = new List<News>();
            dh = new DatabaseHandler();
            dq = new DatabaseQuery();
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
            dh.newConnection();
            string sql = dq.GetNews();
            IDataReader reader = dh.GetQueryResult(sql);
            while (reader.Read()) {
                News temp = new News(Convert.ToInt16(reader["id"]), "" + reader["title"], "" + reader["content"]);
                DatabaseHandler dh2 = new DatabaseHandler();
                string sql2 = dq.GetNewsImages(Convert.ToInt16(reader["id"]));
                IDataReader reader2 = dh2.GetQueryResult(sql2);
                while (reader2.Read()) {
                    temp.appendImages(new Images(Convert.ToInt16(reader2["id"]), "" + reader["image"], ""+reader["path"], 
                                                 Convert.ToInt16(reader2["page_id"]), Convert.ToDouble(reader2["width"]),
                                                 Convert.ToDouble(reader2["height"])) );
                }
            }
		}
        //create a filter
        public void InsertNewNews(News news) {
            dh.newConnection();
            string sql = dq.InsertNews(news, "");
            dh.ExecuteNonQuery(sql);
            dh.newConnection();
            sql = dq.GetNewlyAddedNews(news, "");
            IDataReader reader = dh.GetQueryResult(sql);
            while (reader.Read()) {
                string sql2 = "";
                for (int i = 0; i < news.images.Count; i++) {
                    news.images[i].news_id = Convert.ToInt16(reader["id"]);
                    sql2 = dq.InsertNewsImages(news.images[i], sql2);
                }
                for (int i = 0; i < news.videos.Count; i++) {
                    news.videos[i].news_id= Convert.ToInt16(reader["id"]);
                    sql2 = dq.InsertNewsVides(news.videos[i], sql2);
                }
                DatabaseHandler dh2 = new DatabaseHandler();
                dh2.newConnection();
                dh2.ExecuteNonQuery(sql2);
                dh2.CloseConnection();
            }
        }

	}
}

