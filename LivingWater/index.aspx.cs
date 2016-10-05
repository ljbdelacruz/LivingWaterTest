using System;
using System.Collections.Generic;
using System.Web.Services;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Manager;
using ClassLibraryRepository;
using Newtonsoft.Json;
using System.Diagnostics;

namespace LivingWater
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        #region database loading related stuff
        [WebMethod]
        public static void ListOfGlobalization()
        {

        }
        [WebMethod]
        public static List<News> ListOfNews()
        {
            NewsManager nm = new NewsManager();
            return nm.news;
        }
        [WebMethod]
        public static List<Inbox> ListOfInbox(int user_id)
        {
            InboxManager inboxM = new InboxManager();
            inboxM.loadInboxBasedOnUser(user_id);
            return inboxM.inbox;
        }
        [WebMethod]
        public static List<Concern> ListOfConcern()
        {
            ConcernManager cm = new ConcernManager();
            return cm.Concern;
        }
        [WebMethod]
        public static List<VerificationCode> ListOfVerificationCodes()
        {
            VerificationCodeManager vcm = new VerificationCodeManager();
            return vcm.codes;
        }
        [WebMethod]
        public static List<Images> ListOfSlideImages()
        {
            SlideManager sm = new SlideManager();
            return sm.images;
        }
        [WebMethod]
        public static List<Products> ListOfProducts() {
            ProductManager pm = new ProductManager();
            pm.loadData();
            return pm.products;
        }
        #endregion

        #region database posting stuff
        [WebMethod]
        public static List<Globalization> GetGlobalizationByUserLanguage(int langID)
        {
            GlobalizationManager gm = new GlobalizationManager();
            return gm.FilterGlobalizationBasedOnUserLanguage(langID);
        }
        #endregion

        #region checking user credibility
        [WebMethod]
        public static UserProfile CheckUserExistence(string data)
        {
            try
            {
                var userLogin = JsonConvert.DeserializeObject<Users>(data);
                UserManager um = new UserManager();
                if (um.isExist(userLogin.username, userLogin.password))
                {
                    return um.filtered;
                }
            }
            catch (Exception e) {
                
            }
            return null;
        }
        #endregion

        #region database checking, verifying, adding, editing and deleting data from database
        [WebMethod]
        public static void VerifyUser(string userInput)
        {

        }
        [WebMethod]
        public static bool AddNew(string data, int process)
        {
            if (data != null)
            {
                switch (process)
                {
                    case 1:
                        //this process is for adding new user from registration saves from database
                        var user = JsonConvert.DeserializeObject<UserProfile>(data);
                        UserManager um = new UserManager();
                        if (um.IsUnique(user.username, user.password, 1))
                        {
                            um.insertNewUser(user);
                            return true;
                        }
                        break;
                    case 2:
                        //this process is for adding new news in database
                        var news = JsonConvert.DeserializeObject<News>(data);
                        NewsManager nm = new NewsManager();
                        nm.InsertNewNews(news);
                        break;
                    case 3:
                        //do a database insertion from database here call a method from a class to insert data from registration of new users
                        var ic = JsonConvert.DeserializeObject<InboxContent>(data);
                        InboxManager im = new InboxManager();
                        im.insertNewMessageContent(ic);
                        break;
                    case 4:
                        //Adding inbox from a user
                        break;
                    case 5:
                        //this is for inserting genre(Product)
                        var p = JsonConvert.DeserializeObject<Products>(data);
                        ProductManager pm = new ProductManager();
                        pm.addProduct(p);
                        break;
                    case 6:
                        //this is for adding productItem
                        break;
                    default:
                        break;
                }
            }
            return false;
        }

        [WebMethod]
        public static void UpdateData(string data, int process)
        {
            /*legend
             * 1 - product 
             * 2 - news 
            */
            switch (process) {
                case 1:
                    Debug.WriteLine("Excute Data");
                    var product = JsonConvert.DeserializeObject<ProductItem>(data);
                    ProductManager pm = new ProductManager();
                    pm.updateProductItem(product);
                    break;
                case 2:
                    var news = JsonConvert.DeserializeObject<News>(data);
                    NewsManager nm = new NewsManager();
                    nm.updateNews(news);
                    break;
            }
        }
        [WebMethod]
        public static void DeleteItem(string data, int process)
        {
            switch (process) {
                case 1:
                    var product = JsonConvert.DeserializeObject<List<ProductItem>>(data);
                    ProductManager pm = new ProductManager();
                    pm.deleteProductItem(product);
                    break;
                case 2:
                    break;
                case 3:
                    var inbox = JsonConvert.DeserializeObject<List<Inbox>>(data);
                    string inboxQ="";
                    string inboxC = "";
                    InboxManager im = new InboxManager();
                    for (int i = 0; i < inbox.Count; i++) {
                        inboxQ = im.concatDeleteInbox(inboxQ, inbox[i].id);
                        for (int c = 0; c < inbox[i].InboxContent.Count; c++) {
                            inboxC = im.concatDeleteInboxContent(inboxC, inbox[i].InboxContent[c].id);
                        }
                    }
                    im.ExecuteNonQuery(inboxQ);
                    im.ExecuteNonQuery(inboxC);
                    break;
                default:
                    break;
            }
        }
        #endregion
    }
}