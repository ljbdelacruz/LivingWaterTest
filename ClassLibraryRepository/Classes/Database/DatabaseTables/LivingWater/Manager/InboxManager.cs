using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;


namespace ClassLibraryRepository
{
	public class InboxManager
	{
		#region properties
		public List<Inbox> inbox;
		#endregion

		#region constructors
		//sends a parameter of the receiving and the sender id of a specific user to filter
		//in database on which data will be fetched
		public InboxManager (int receiver_id, int sender_id)
		{
			this.inbox = new List<Inbox> ();
            init();
		}
        //temporary data
        public void init() {
            this.inbox.Add(new Inbox(1, 1, "ljbdelacruz", "Production", "How Im A Numb", false, 1, "John"));
            this.inbox.Add(new Inbox(2, 1, "ljbdelacruz1", "Production", "How Im A Numbling", false, 1, "John"));
        }
		private void loadInboxBasedOnUser(int receiver_id, int sender_id){
			//loads user here based on its receiver and sender id
			//loads data from database
		}
		#endregion
		#region filters
		public List<Inbox> filterByReceiverID(int receiver_id){
			List<Inbox> temp = new List<Inbox> ();
			for (int i = 0; i < this.inbox.Count; i++) {
				if (inbox[i].receiver_id == receiver_id) {
					temp.Add(inbox [i]);
				}
			}
			return temp;
		}
		public List<Inbox> filterBySenderID(int sender_id){
			List<Inbox> temp = new List<Inbox> ();
			for (int i = 0; i < this.inbox.Count; i++) {
				if (inbox[i].sender_id == sender_id){
					temp.Add(inbox [i]);
				}
			}
			return temp;
		}
		#endregion
	}
}

