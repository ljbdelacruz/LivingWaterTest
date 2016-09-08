using System;


namespace ClassLibraryRepository.Util
{
	public class Math
	{
		public Math()
		{
		}
		#region Add
		public Double Add(Double x, Double y)
		{
			return x + y;
		}
		public int Add(int x, int y) {
			return x + y;
		}
		public float Add(float x, float y) {
			return x + y;
		}
		#endregion

		#region Subtruct
		public Double Sub(Double x, Double y) {
			return x - y;
		}
		public int Sub(int x, int y) {
			return x - y;
		}
		public float Sub(float x, float y) {
			return x - y;
		}
		#endregion

		#region Multiplication
		public Double Mul(Double x, Double y) {
			return x * y;
		}
		public int Mul(int x, int y) {
			return x * y;
		}
		public float Mul(float x, float y) {
			return x * y;
		}
		#endregion
		#region division
		public Double Div(double x, double y) {
			return x / y;
		}
		public int Div(int x, int y) {
			return x / y;
		}
		public float Div(float x, float y) {
			return x / y;
		}
		#endregion

		#region is equal
		public bool comp(string x, string y) {
			return (x == y) ? true : false;
		}
		public bool comp(int x, int y) {
			return (x == y) ? true : false;			
		}
		#endregion
		#region and operation
		public bool And(string x, string ix, string y, string iy) {
			return (this.comp(x, ix) && this.comp(y, iy)) ? true : false;
		}
		public bool And(int x, int ix, int y, int iy) {
			return (this.comp(x, ix) && this.comp(y, iy)) ? true : false;			
		}
		#endregion


	}
}

