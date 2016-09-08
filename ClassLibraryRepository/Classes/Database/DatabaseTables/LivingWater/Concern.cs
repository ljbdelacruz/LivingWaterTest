using System;

namespace ClassLibraryRepository
{
	public class Concern
	{
		#region properties
		public int Id{ get; set;}
		public string title{ get; set;}
		public int subject_id{ get; set;}
		public string subject{ get; set;}
		public string message{ get; set;}
		public string username{ get; set;}
		public bool unread{ get; set;}
		public bool resolved{ get; set;}

		#endregion
		#region constructors
		public Concern ()
		{
		}
		public Concern(int nId, string nTitle, int nSubject_id, string nSubject, string nMessage, string nUsername, bool nUnread, bool nResolved){
			this.Id = nId;
			this.title = nTitle;
			this.subject_id = nSubject_id;
			this.subject = nSubject;
			this.message = nMessage;
			this.username = nUsername;
			this.unread = nUnread;
			this.resolved = nResolved;
		}
		#endregion
	}
}

