using System;
namespace ClassLibraryRepository
{
	public class ConversationConcern
	{
		public int id { get; set; }
		public int itemConcern_id { get; set; }
		public string message { get; set; }

		public ConversationConcern(int nId, int nItemConcern_id, string nMessage)
		{
			this.id = nId;
			this.itemConcern_id = nItemConcern_id;
			this.message = nMessage;
		}
	}
}

