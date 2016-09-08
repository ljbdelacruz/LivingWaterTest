using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Manager
{
    public class GlobalizationManager
    {
		#region properties
        public List<Globalization> globalization = new List<Globalization>();

		#endregion

		#region constructors
		public GlobalizationManager(){
			globalization = new List<Globalization> ();
            init();
		}
        public void init() {
            Globalization g = new Globalization(1, "/Home", true, 1); //page id for index is 1
            g.AppendTranslation(new Translation(1, "Home"));
            g.AppendTranslation(new Translation(2, "ホーム"));
            this.globalization.Add(g);

            g = new Globalization(2, "/Products", true, 1);
            g.AppendTranslation(new Translation(1, "Products"));
            g.AppendTranslation(new Translation(2, "プロダクト"));
            this.globalization.Add(g);

            g = new Globalization(2, "/News", true, 1);
            g.AppendTranslation(new Translation(1, "News"));
            g.AppendTranslation(new Translation(2, "ログアウト"));
            this.globalization.Add(g);

            g = new Globalization(3, "/AboutUs", true, 1);
            g.AppendTranslation(new Translation(1, "About Us"));
            g.AppendTranslation(new Translation(2, "私たちに関しては"));
            this.globalization.Add(g);

            g = new Globalization(4, "/AdminDashboard", true, 1);
            g.AppendTranslation(new Translation(1, "Admin Dashboard"));
            g.AppendTranslation(new Translation(2, "管理ダッシュボード"));
            this.globalization.Add(g);

            g = new Globalization(5, "/ContactUs", true, 1);
            g.AppendTranslation(new Translation(1, "Contact Us"));
            g.AppendTranslation(new Translation(2, "お問い合わせ"));
            this.globalization.Add(g);

            g = new Globalization(6, "/Login", true, 1);
            g.AppendTranslation(new Translation(1, "Log out"));
            g.AppendTranslation(new Translation(2, "ログアウト"));
            this.globalization.Add(g);


            //admin navbar case 2
            g = new Globalization(6, "secInbox", true, 2);
            g.AppendTranslation(new Translation(1, "Inbox"));
            g.AppendTranslation(new Translation(2, "受信トレイ"));
            this.globalization.Add(g);

            g = new Globalization(7, "secNews", true, 2);
            g.AppendTranslation(new Translation(1, "Post A News"));
            g.AppendTranslation(new Translation(2, "ポストAニュース"));
            this.globalization.Add(g);

            g = new Globalization(8, "secConcern", true, 2);
            g.AppendTranslation(new Translation(1, "Concerns"));
            g.AppendTranslation(new Translation(2, "懸念"));
            this.globalization.Add(g);

            g = new Globalization(9, "secAdminToolBar", true, 2);
            g.AppendTranslation(new Translation(1, "Admin Tool Bar"));
            g.AppendTranslation(new Translation(2, "管理ツールバー"));
            this.globalization.Add(g);

        }
		private void loadAllGlobalization(){
			//here is where the loading of all globalization from database
		}
		#endregion

		#region filters
		//based on user language
		public List<Globalization> FilterGlobalizationBasedOnUserLanguage(int userLanguage){
			List<Globalization> temp = new List<Globalization> ();
			for (int i = 0; i < globalization.Count; i++) {
				for (int c = 0; c < this.globalization[i].language.Count; c++) {
					if (userLanguage == this.globalization[i].language [c].langID) {
                        //asigns the filtered language 
                        
                        this.globalization[i].AssignFilteredLanguage(this.globalization[i].language[c]);
						temp.Add (this.globalization [i]);
					}
				}
			}
			return temp;
		}
		//based on page id
		public List<Globalization> FilterGlobalizationBasedOnPageID(int page_id){
			List<Globalization> temp = new List<Globalization> ();
			for (int i = 0; i < globalization.Count; i++) {
				for (int c = 0; c < this.globalization[i].language.Count; c++) {
					if (page_id == this.globalization[i].page_id) {
						temp.Add (this.globalization [i]);
					}
				}
			}
			return temp;
		}
		//both
		public List<Globalization> FilterGlobalizationBasedOnUserLanguageAndPageID(int userLanguage, int page_id){
			List<Globalization> temp = new List<Globalization> ();
			for (int i = 0; i < globalization.Count; i++) {
				for (int c = 0; c < this.globalization[i].language.Count; c++) {
					if (userLanguage == this.globalization [i].language [c].langID && page_id == this.globalization[i].page_id) {
						temp.Add (this.globalization [i]);
					}
				}
			}
			return temp;
		}
		#endregion

    }
}
