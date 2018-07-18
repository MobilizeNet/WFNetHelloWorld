

namespace HelloWorld
{
    partial class Form1
    {

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private
        System.ComponentModel.IContainer components { get; set; }

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
            this.button2 = new Mobilize.Web.Button();
            this.button3 = new Mobilize.Web.Button();
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
            ;
                  this.label1.Font = new Mobilize.Web.Font("Arial", 26.25F, Mobilize.Web.FontStyle.Bold, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(12, 25);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(284, 41);
            this.label1.TabIndex = 1;
            this.label1.Text = "My First Sample";
            // 
            // button2
            // 
            this.button2.Font = new Mobilize.Web.Font("Arial", 14.25F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.button2.Location = new System.Drawing.Point(134, 78);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(116, 50);
            this.button2.TabIndex = 2;
            this.button2.Text = "Presione";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Font = new Mobilize.Web.Font("Arial", 14.25F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.button3.Location = new System.Drawing.Point(256, 78);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(116, 50);
            this.button3.TabIndex = 3;
            this.button3.Text = "Login";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // Form1
            // 
            ;
                  this.Controls.Add(this.button3);
                  this.Controls.Add(this.button2);
                  this.Controls.Add(this.label1);
                  this.Controls.Add(this.button1);
                  this.Name = "HelloWorld.Form1";
                  this.Text = "Form1";

              }

              #endregion

        [Mobilize.WebMap.Common.Attributes.Intercepted]

        private Mobilize.Web.Button button1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Button button2 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Button button3 { get; set; }
    }
}