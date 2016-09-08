using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
    public class Users
    {
		#region properties
        public int Id;
		public string username{ get; set;}
		public string password{ get; set;}
		public int language_id{ get; set;}
		public bool isadmin{ get; set;}
		public int profile_id{get; set;}
		#endregion

		#region constructors
		public Users(){
		}
		public Users(int nId, string nUsername, string nPassword, int nLanguage_id, bool nIsadmin, int nProfile_id){
			this.Id = nId;
			this.username = nUsername;
			this.password = nPassword;
			this.language_id = nLanguage_id;
			this.isadmin = nIsadmin;
			this.profile_id = nProfile_id;
		}
        public Users(string nUsername, string nPassword, int nLanguage_id, bool nIsAdmin) {
            this.username = nUsername;
            this.password = nPassword;
            this.language_id = nLanguage_id;
            this.isadmin = nIsAdmin;
            this.profile_id = this.Id;
        }
        
		#endregion

    }
}
