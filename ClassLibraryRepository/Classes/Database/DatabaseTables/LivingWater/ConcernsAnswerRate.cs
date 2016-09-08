using System;
namespace ClassLibraryRepository
{
	public class ConcernsAnswerRate
	{
		#region properties
		public int Id { get; set; }
		public int answer_rate { get; set; }
		public int concern_answer_id { get; set; }

		#endregion
		#region constructors
		public ConcernsAnswerRate(int nId, int nAnswerRate, int nConcernAnswer_id)
		{
			this.Id = nId;
			this.answer_rate = nAnswerRate;
			this.concern_answer_id = nConcernAnswer_id;
		}
		#endregion
	}
}

