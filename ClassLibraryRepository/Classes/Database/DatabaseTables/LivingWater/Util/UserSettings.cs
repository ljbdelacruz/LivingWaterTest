using System;
namespace ClassLibraryRepository
{
	public class UserSettings
	{
		#region properties
		public int user_id { get; set; }
		public string username { get; set; }
		public int language_id { get; set; }
		public bool isadmin { get; set; }
		public bool islogin { get; set; }
		public int newsToModify { get; set; }
		public int process { get; set; }
		#endregion

		#region constructors 
		public UserSettings(int nUser_id, string nUsername, int nLanguage_id, bool nIsAdmin, bool nIsLogin, int nNewsToModify, int nProcess) {
			this.user_id = nUser_id;
			this.username = nUsername;
			this.language_id = nLanguage_id;
			this.isadmin = nIsAdmin;
			this.islogin = nIsLogin;
			this.newsToModify = nNewsToModify;
			this.process = nProcess;
		}

		#endregion




	}
}

