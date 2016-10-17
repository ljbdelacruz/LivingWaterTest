using System;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using System.Collections.Generic;


namespace ClassLibraryRepository
{
	public class Inbox 
	{
		#region properties
		public int id{ get; set;}
        public int receiver_id { get; set; }
        public int sender_id{ get; set;}
		public string sender_username{ get; set;}
		public string subject{ get; set;}
        public bool isSelected { get; set; }
        public List<InboxContent> InboxContent;
		#endregion
		#region constructors
		public Inbox(int nId, int nSender_id,string nUser, string nSubject, int nReceiver_id){
			this.id = nId;
			this.sender_id = nSender_id;
			this.sender_username = nUser;
			this.subject = nSubject;
			this.receiver_id = nReceiver_id;
            this.InboxContent = new List<InboxContent>();
		}
        public Inbox(int nSender_id, int nReceiver_id, string nSubject) {
            this.sender_id = nSender_id;
            this.receiver_id = nReceiver_id;
            this.subject = nSubject;
        }



        #endregion

        public void appendInboxContent(InboxContent ic) {
            this.InboxContent.Add(ic);
        }

	}
}

