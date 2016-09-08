//this globalization is for navigation bar maybe it can be applied on the labels
//just add properties if it has not on the json data that will be fetched

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;


namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
    public class Globalization
    {
        #region properties
        public int id { get; set; }
        public List<Translation> language = new List<Translation>();
        public Translation filteredLanguage;
		public string path{ get; set;}
		public bool show{ get; set;}
		public int page_id{ get; set;}
		#endregion

		#region constructors
		public Globalization(int nId, string nPath, bool nShow, int nPage_id) {
            this.id = nId;
			this.path = nPath;
			this.language = new List<Translation> ();
			this.show = nShow;
			this.page_id = nPage_id;
            this.filteredLanguage = new Translation();
        }
        public void AppendTranslation(Translation nLang) {
            language.Add(nLang);
        }
        public void AssignFilteredLanguage(Translation lang) {
            this.filteredLanguage = lang;
        }
        #endregion
    }
}
