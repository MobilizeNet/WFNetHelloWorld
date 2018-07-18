using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelloWorld
{

    [Mobilize.WebMap.Common.Attributes.Observable]
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        public
            static void Main()
            {new Form1().Show();
            }

    }
}