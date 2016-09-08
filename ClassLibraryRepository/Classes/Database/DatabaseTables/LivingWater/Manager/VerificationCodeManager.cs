using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Manager
{
    public class VerificationCodeManager
    {
        public List<VerificationCode> codes;

        public VerificationCodeManager() {
            this.codes = new List<VerificationCode>();
            init();
        }
        //temporary data for testing
        public void init() {
            codes.Add(new VerificationCode(1, "/Assets/images/verificationCode/vc1.png", "338409"));
            codes.Add(new VerificationCode(2, "/Assets/images/verificationCode/vc2.png", "742877"));
        }
        public void loadData() {

        }

    }
}
