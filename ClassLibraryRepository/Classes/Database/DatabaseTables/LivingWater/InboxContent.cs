using System;
namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
	public class InboxContent
	{
		#region properties
		public int id { get; set; }
		public string message { get; set; }
		public bool unread { get; set; }
		public int inbox_id { get; set; }
        public string dateCreated { get; set; }
		#endregion

		#region constructors
		public InboxContent(int nId, string nMessage, bool nUnread, string nDateCreated, int nInbox_id)
		{
			this.id = nId;
			this.message = nMessage;
			this.unread = nUnread;
            this.dateCreated = nDateCreated;
			this.inbox_id = nInbox_id;
		}
		public InboxContent(int nId, string nMessage, bool nUnread) {
			this.id = nId;
			this.message = nMessage;
			this.unread = nUnread;
		}
		#endregion

	}
}

