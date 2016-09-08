using System;

namespace ClassLibraryRepository
{
	public class Inbox
	{
		#region properties
		public int Id{ get; set;}
        public int receiver_id { get; set; }
        public int sender_id{ get; set;}
		public string user{ get; set;}
		public string subject{ get; set;}
		public string body{ get; set;}
		public bool unread{ get; set;}

		public string receiver{ get; set;}

		#endregion
		#region constructors
		public Inbox ()
		{

		}
		public Inbox(int nId, int nSender_id,string nUser, string nSubject, string nBody, bool nUnread, int nReceiver_id, string nReceiver){
			this.Id = nId;
			this.sender_id = nSender_id;
			this.user = nUser;
			this.subject = nSubject;
			this.body = nBody;
			this.unread = nUnread;
			this.receiver_id = nReceiver_id;
			this.receiver = nReceiver;
		}
		#endregion


	}
}

