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
                        Debug.WriteLine("1");
                        //this process is for adding new user from registration saves from database
                        var user = JsonConvert.DeserializeObject<UserProfile>(data);
                        UserManager um = new UserManager();
                        if (um.IsUnique(user.username, user.password, 1))
                        {
                            um.insertNewUser(user);
                            return true;
                        }
                        break;
                    case 3:
                        //do a database insertion from database here call a method from a class to insert data from registration of new users
                        break;
                    case 4:
                        //deleting inbox from a user
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

        }
        [WebMethod]
        public static void DeleteItem(string data, int process)
        {

        }
        #endregion
    }
}