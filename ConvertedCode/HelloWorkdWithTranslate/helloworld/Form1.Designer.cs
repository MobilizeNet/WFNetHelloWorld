using Mobilize.WebMap.Common.Attributes;
using Mobilize.Web.Extensions;

namespace HelloWorld
{
    partial class Form1
    {

      [Intercepted]
      /// <summary>
      /// Required designer variable.
      /// </summary>
      private
      Mobilize.Web.Controls.Interfaces.IContainer components { get; set; } = null;

      /// <summary>
      /// Clean up any resources being used.
      /// </summary>
      /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>

      protected override void Dispose(bool disposing)
      {
          if (disposing && (components != null))
         {
             components.Dispose();
         }
         base.Dispose(disposing);
     }

      [Mobilize.WebMap.Common.Attributes.Designer]

      #region Windows Form Designer generated code

      /// <summary>
      /// Required method for Designer support - do not modify
      /// the contents of this method with the code editor.
      /// </summary>
      private
         void InitializeComponent()
      {
          this.button1 = new Mobilize.Web.Button();
          this.label1 = new Mobilize.Web.Label();
          this.SuspendLayout();
          // 
          // button1
          // 
          this.button1.Font = new Mobilize.Web.Font("Arial", 14.25F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
         this.button1.Location = new System.Drawing.Point(12, 78);
         this.button1.Name = "button1";
         this.button1.Size = new System.Drawing.Size(116, 50);
         this.button1.TabIndex = 0;
         this.button1.Text = "Click Me";
         this.button1.UseVisualStyleBackColor = true;
         this.button1.Click += new System.EventHandler(this.button1_Click);
         // 
         // label1
         // 
         this.label1.AutoSize = true;
         this.label1.Font = new Mobilize.Web.Font("Arial", 26.25F, Mobilize.Web.FontStyle.Bold, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
         this.label1.Location = new System.Drawing.Point(12, 25);
         this.label1.Name = "label1";
         this.label1.Size = new System.Drawing.Size(284, 41);
         this.label1.TabIndex = 1;
         this.label1.Text = "My First Sample";
         this.Properties().AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
         this.Properties().AutoScaleMode = Stub._System.Windows.Forms.AutoScaleMode.Font;
         this.Properties().ClientSize = new System.Drawing.Size(398, 143);
         this.Controls.Add(this.label1);
         this.Controls.Add(this.button1);
         this.Name = "Form1";
         this.Text = "Form1";
         this.ResumeLayout(false);
         this.PerformLayout();
         //
         // button3
         //
         this.button3 = new Mobilize.Web.Button();
         this.button3.Font = new Mobilize.Web.Font("Arial", 14.25F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
         this.button3.Location = new System.Drawing.Point(134, 78);
         this.button3.Name = "button3";
         this.button3.Text = "Login";
         this.button3.Click += new System.EventHandler(this.button3_Click);
        }

     #endregion

      [Intercepted]

      private Mobilize.Web.Button button1 { get; set; }

      [Intercepted]
      private Mobilize.Web.Label label1 { get; set; }

        [Intercepted]
        private Mobilize.Web.Button button3 { get; set; }
    }
}