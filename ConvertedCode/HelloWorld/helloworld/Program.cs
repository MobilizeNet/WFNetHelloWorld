using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mobilize.WebMap.Common.Attributes;

namespace HelloWorld
{

   [Observable]
   static class Program
   {
       /// <summary>
       /// The main entry point for the application.
       /// </summary>
       [STAThread]
      public static void Main()
       {
         Stub._System.Windows.Forms.Application.EnableVisualStyles();
         Stub._System.Windows.Forms.Application.SetCompatibleTextRenderingDefault(false);
         new Form1().Show();
                 }

   }
}