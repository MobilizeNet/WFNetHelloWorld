using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mobilize.WebMap.Common.Attributes;

namespace HelloWorld
{

   [Observable]
   public partial class Form1 : Mobilize.Web.Form
   {
       public Form1()
       {
           InitializeComponent();
       }

       private void button1_Click(object sender, EventArgs e)
       {
           this.label1.Text = "Hello World";
       }

       private void button2_Click(object sender, System.EventArgs e)
       {
           this.label1.Text = "Hola Mundo";
       }

   }
}