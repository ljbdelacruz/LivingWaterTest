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
		public InboxManager (int receiver_id)
		{
			this.inbox = new List<Inbox> ();
            init();
		}
        //temporary data
        public void init() {
            Inbox newInbox = new Inbox(1, 1, "ljbdelacruz", "Production", 1);
            newInbox.appendInboxContent(new InboxContent(1, "Hello I Am Jonah Hill", true, "2016-9-9", 1));
            newInbox.appendInboxContent(new InboxContent(2, "Hello Mr Jonah Hill I Am Clinton", true, "2016-9-9", 1));
            this.inbox.Add(newInbox);
            newInbox = new Inbox(2, 1, "ljbdelacruz1", "Franchising", 1);
            newInbox.appendInboxContent(new InboxContent(1, "Hello I Am Josh", true, "2016-9-9", 2));
            this.inbox.Add(newInbox);
        }
		private void loadInboxBasedOnUser(int receiver_id, int sender_id){
			//loads user here based on its receiver and sender id
			//loads data from database


		}
		#endregion
		#region filters
        /*
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
        */
		#endregion
	}
}

