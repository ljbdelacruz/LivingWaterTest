using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	//inherits the User class
	public class UserProfile : Users
	{
		#region properties
		public string firstname{ get; set;}
		public string middlename{ get; set;}
		public string lastname{ get; set;}
		public int birthMonth{ get; set;}
		public int birthDay{ get; set;}
		public int birthYear{ get; set;}
		public int age{ get; set;}
        public string sex { get; set; }
		#endregion
		#region constructors
		public UserProfile () : base()
		{

		}
		public UserProfile(int nId, string nFirstname, string nMiddlename, string nLastname, int nBirthMonth, int nBirthDay, int nBirthYear, int nAge,
			int nUId, string nUsername, string nPassword, int nLangID, bool nIsAdmin)
			: base(nUId, nUsername, nPassword, nLangID, nIsAdmin, nId)
			{
			this.Id = nId;
			this.firstname = nFirstname;
			this.middlename = nMiddlename;
			this.lastname = nLastname;
			this.birthMonth = nBirthMonth;
			this.birthDay = nBirthDay;
			this.birthYear = nBirthYear;
			this.age = nAge;
		}
        public UserProfile(string nFirstname, string nMiddlename, string nLastname, int nBirthMonth, int nBirthday, int nBirthYear, int nAge,
                           string nUsername, string nPassword, int nLangID, bool nIsAdmin, string nSex) : base(nUsername, nPassword, nLangID, nIsAdmin) {
            this.firstname = nFirstname;
            this.middlename = nMiddlename;
            this.lastname = nLastname;
            this.birthMonth = nBirthMonth;
            this.birthDay = nBirthday;
            this.birthYear = nBirthYear;
            this.age = nAge;
            this.username = nUsername;
            this.password = nPassword;
            this.language_id = nLangID;
            this.isadmin = nIsAdmin;
            this.sex = nSex;
        }
        public UserProfile(string nUsername, string nPassword, int nLanguage_id, bool nIsadmin) : 
               base(nUsername, nPassword, nLanguage_id, nIsadmin) {
        }


		#endregion
	}
}

