using System;
using System.Data;
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
        private DatabaseHandler dbh;
		#endregion

		#region constructors
		//sends a parameter of the receiving and the sender id of a specific user to filter
		//in database on which data will be fetched
		public InboxManager ()
		{
			this.inbox = new List<Inbox> ();
            dbh = new DatabaseHandler();
            //init();
            //this.loadInboxBasedOnUser(receiver_id);
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
		public void loadInboxBasedOnUser(int receiver_id){
            //loads user here based on its receiver and sender id
            //loads data from database
            dbh.newConnection();
            string sql = "select i.id AS id, u.username AS username, i.receiver_id AS receiver_id, i.sender_id AS sender_id, i.subject AS subject, i.dateCreated AS dateCreated"+
                          " FROM user u, inbox i WHERE i.sender_id = u.id AND i.receiver_id = "+receiver_id+" OR i.sender_id = "+receiver_id+" AND u.id = i.receiver_id ORDER BY i.dateCreated desc;" ;
            IDataReader reader = dbh.GetQueryResult(sql);
            while (reader.Read()) {
                Inbox newInbox = new Inbox(Convert.ToInt16(reader["id"]), Convert.ToInt16(reader["sender_id"]), 
                                           ""+reader["username"], ""+reader["subject"], Convert.ToInt16(reader["receiver_id"]));
                DatabaseHandler dbh2 = new DatabaseHandler();
                dbh2.newConnection();
                string sql2 = "SELECT id, message, unread, dateSent, inbox_id FROM inboxContent WHERE inbox_id="+newInbox.id+"; ";
                IDataReader reader2 = dbh2.GetQueryResult(sql2);
                while (reader2.Read()) {
                    InboxContent ic = new InboxContent(Convert.ToInt16(reader2["id"]), ""+reader2["message"], 
                                                      (Convert.ToInt16(reader2["unread"])==1) ? true : false,
                                                      ""+reader2["dateSent"], Convert.ToInt16(reader2["inbox_id"]));
                    newInbox.appendInboxContent(ic);
                }
                dbh2.CloseConnection();
                inbox.Add(newInbox);
            }
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

        #region database
        public void insertNewMessageContent(InboxContent ic) {
            dbh.newConnection();
            string sql = "insert inboxContent(message, unread, inbox_id, dateSent) values('"+ic.message+"', "+ic.unread+", "+ic.inbox_id+", NOW());";
            dbh.ExecuteNonQuery(sql);
        }
        #endregion
    }
}

