using System;
namespace ClassLibraryRepository
{
	public class Feedbacks
	{
		public int id { get; set; }
		public string feedback { get; set; }
		public int type { get; set; }
		public int rating { get; set; }

		public Feedbacks(int nId, string nFeedback, int nType, int nRating)
		{
			this.id = nId;
			this.feedback = nFeedback;
			this.type = nType;
			this.rating = nRating;
		}




	}
}

