using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class ConcernManager
	{
		#region properties
		public List<Concern> Concern;
		#endregion

		#region constructor
		public ConcernManager ()
		{
			Concern = new List<Concern> ();
            init();
		}
        public void init() {
            Concern.Add(new Concern(1, "Hello", 1, "Product", "What  The Hell Is This Concern 1", "ljbdelacruz", false, false));
            Concern.Add(new Concern(2, "Hello", 1, "Product", "What The Hell Is This Concern 2", "ljbdelacruz", false, false));
        }
		private void loadData(){
			//this method loads the data from all the concern on the database 
		}
		#endregion

		#region filters
		//filter by type
		public List<Concern> filterByType(int subject_id){
			List<Concern> temp = new List<Concern> ();
			for (int i = 0; i < this.Concern.Count; i++) {
				if (this.Concern [i].subject_id == subject_id) {
					temp.Add (this.Concern [i]);
				}
			}
			return temp;
		}
		#endregion
		#region functionality
		public void UpdateConcernDetailsInDatabase(int index, Concern uConcern) { 
			
		}


		#endregion


	}
}

