using System;
using System.Collections.Generic;
using ClassLibraryRepository;

namespace ClassLibraryRepository
{

	//this class will group the conversation with same item concern example they have
	//PM the seller about the item which they have concern of and they talked about it for
	//and their conversation will be grouped into same so that it will become inbox

	public class ItemConcern
	{
		public int id { get; set; }
		public int item_id { get; set; }
		public int conversation_id { get; set; }
		public List<ConversationConcern> concern;

		public ItemConcern(int nId, int nItem_id, int nConversation_id)
		{
			this.id = nId;
			this.item_id = nItem_id;
			this.conversation_id = nConversation_id;
		}
		public void appendConversation(ConversationConcern nConcern) {
			this.concern.Add(nConcern);	
		}

	}
}

