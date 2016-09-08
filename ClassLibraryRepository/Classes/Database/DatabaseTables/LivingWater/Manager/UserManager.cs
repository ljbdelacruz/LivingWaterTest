using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using System.Data;
using System.Diagnostics;

namespace ClassLibraryRepository
{
	public class UserManager
	{


		#region properties
		public List<UserProfile> usersProfile;
        private DatabaseHandler dbh;
        public UserProfile filtered;
		#endregion

		#region constructor
		public UserManager ()
		{
            usersProfile = new List<UserProfile>();
            dbh = new DatabaseHandler();
		}
        public void init() {
            usersProfile.Add(new UserProfile(1, "Lainel", "john", "dela", 12, 5, 1994, 21, 1, "admin", "admin", 1, true));
            usersProfile.Add(new UserProfile(1, "Lainel", "john", "dela", 12, 5, 1994, 21, 1, "admin1", "admin1", 2, true));
        }
		public void loadData(){
            //loads the data from database
            string sql = "select u.id AS id, " +
                        " ui.firstname AS fn," +
                        " ui.middlename AS mn," +
                        " ui.lastname AS ln," +
                        " month(ui.birthday) AS Month," +
                        " day(ui.birthday)AS Day," +
                        " year(ui.birthday) AS Year," +
                        " ui.age AS Age," +
                        " u.username AS user," +
                        " u.password AS pass," +
                        " us.language_id AS lang," +
                        " us.isadmin AS isadmin" +
                        " from user AS u, userInfo AS ui, usersettings AS us" +
                        " WHERE ui.user_id = u.id AND us.user_id = u.id;";
            IDataReader reader = dbh.GetQueryResult(sql);
            while(reader.Read()){
                usersProfile.Add(new UserProfile(Convert.ToInt16(reader["id"]), "" + reader["fn"], "" + reader["mn"], "" + reader["ln"], Convert.ToInt16(reader["Month"]),
                                                 Convert.ToInt16(reader["Day"]),
                                                 Convert.ToInt16(reader["Year"]), Convert.ToInt16(reader["Age"]),
                                                 Convert.ToInt16(reader["id"]), "" + reader["user"], "" + reader["pass"], Convert.ToInt16(reader["lang"]),
                                                (Convert.ToInt16(reader["isadmin"]) == 1) ? true : false));
            }
		}

        public bool isExist(string username, string password) {
            bool exist = this.IsUnique(username, password, 2);
            int data = filtered.Id;
            if (exist)
            {
                string sql = " select u.id AS id, " +
                " ui.firstname AS fn," +
                " ui.middlename AS mn," +
                " ui.lastname AS ln," +
                " month(ui.birthday) AS Month," +
                " day(ui.birthday)AS Day," +
                " year(ui.birthday) AS Year," +
                " ui.age AS Age," +
                " u.username AS user," +
                " u.password AS pass," +
                " us.language_id AS lang," +
                " us.isadmin AS isadmin" +
                " from user AS u, userInfo AS ui, usersettings AS us" +
                " WHERE u.id = " + data + " AND ui.user_id = u.id AND us.user_id = u.id;";
                dbh.newConnection();
                IDataReader reader = dbh.GetQueryResult(sql);
                while (reader.Read())
                {
                    this.filtered = new UserProfile(data,"" + reader["fn"], "" + reader["mn"], "" + reader["ln"],
                                                    Convert.ToInt16(reader["Month"]),
                                                    Convert.ToInt16(reader["Day"]),
                                                    Convert.ToInt16(reader["Year"]), Convert.ToInt16(reader["Age"]), data,
                                                    "" + reader["user"], "" + reader["pass"], Convert.ToInt16(reader["lang"]),
                                                    (Convert.ToInt16(reader["isadmin"]) == 1) ? true : false);
                }
            }
            return exist;
        }
        #endregion
        public bool insertNewUser(UserProfile user) {
            bool isSuccess = false;
            try
            {
                isSuccess = true;
                dbh.newConnection();
                string sql = "INSERT INTO user(username, password) values('"+user.username+"', MD5('"+user.password+"'));";
                user.language_id = 1;
                dbh.ExecuteNonQuery(sql);
                user.Id=GetNewlyAddedUser(user);
                if (user.Id != -1)
                {
                    this.insertUserInfo(user);
                    this.insertUserSettings(user);
                }else {
                    isSuccess = false;
                }
            }
            catch {
                isSuccess = false;
            }
            return isSuccess;
        }
        public int GetNewlyAddedUser(UserProfile up) {
            try
            {
                dbh.newConnection();
                string sql = "SELECT id from user WHERE username='" + up.username + "' AND password=MD5('" + up.password + "')";
                IDataReader reader = dbh.GetQueryResult(sql);
                while (reader.Read())
                {
                    return Convert.ToInt16(reader["id"]);
                }
            }
            catch (Exception e) {
                Debug.WriteLine("Error " + e);
            }
            return -1;
        }
        public void insertUserInfo(UserProfile up) {
            dbh.newConnection();
            up.age = 2016 - up.birthYear;
            string sql = "insert userInfo(firstname, middlename, lastname, birthday, age, sex, user_id)"+
                         "values('"+up.firstname+"', '"+up.middlename+"', '"+up.lastname+"', '"+up.birthYear+"-"+up.birthMonth+"-"+up.birthDay+"', "+up.age+", '"+up.sex+"', "+up.Id+");";
            dbh.ExecuteNonQuery(sql);
        }
        public void insertUserSettings(UserProfile up) {
            dbh.newConnection();
            string sql = "insert usersettings(isadmin, verified, language_id, user_id)"+
                         "values(false, false, "+up.language_id+", "+up.Id+")";
        }
        
        public bool IsUnique(string username, string password, int process) {
            //process legend
            //1 is for checking if username already taken or not
            //2 is for checking if user existed
            string sql="";
            dbh.newConnection();
            switch (process) {
                case 1:
                    sql = "select count(*) AS exist, id FROM user WHERE username = '" + username + "';";
                    break;
                case 2:
                    sql = "select count(*) AS exist, id FROM user WHERE username = '" + username + "' AND password='" + dbh.MD5Equivalent(password) + "';";
                    break;
                default:
                    break;
            }
            dbh.newConnection();
            IDataReader reader = dbh.GetQueryResult(sql);
            this.filtered = new UserProfile();
            while (reader.Read()) {
                switch (process) {
                    case 1:
                        if (Convert.ToInt16(reader["exist"]) == 0) {
                            return true;
                        }
                        break;
                    case 2:
                        if (Convert.ToInt16(reader["exist"]) == 1) {
                            filtered.Id = Convert.ToInt16(reader["id"]);
                            return true;
                        }
                        break;
                    default:
                        break;
                }
            }
            return false;
        }

	}
}

