using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Util;
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
        public DatabaseQuery dq;
		#endregion

		#region constructor
		public UserManager ()
		{
            usersProfile = new List<UserProfile>();
            dbh = new DatabaseHandler();
            dq = new DatabaseQuery();
		}
        public void init() {
            usersProfile.Add(new UserProfile(1, "Lainel", "john", "dela", 12, 5, 1994, 21, 1, "admin", "admin", 1, true));
            usersProfile.Add(new UserProfile(1, "Lainel", "john", "dela", 12, 5, 1994, 21, 1, "admin1", "admin1", 2, true));
        }
		public void loadData(){
            //loads the data from database
            string sql = dq.GetUserInformation();
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
                string sql = dq.GetUserInformation(data);
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
                string sql = dq.insertNewUser(user, "");
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
                string sql = dq.GetNewlyAddedUser(up);
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
            string sql = dq.insertNewUserInfo(up, "");
            dbh.ExecuteNonQuery(sql);
        }
        public void insertUserSettings(UserProfile up) {
            dbh.newConnection();
            string sql = dq.insertUserSettings(up, "");
        }
        
        public bool IsUnique(string username, string password, int process) {
            //process legend
            //1 is for checking if username already taken or not
            //2 is for checking if user existed
            string sql="";
            dbh.newConnection();
            switch (process) {
                case 1:
                    sql = dq.GetIsUnique(username);
                    break;
                case 2:
                    sql = dq.GetIsUnique(username, dbh.MD5Equivalent(password));
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

