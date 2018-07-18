

namespace HelloWorld
{
    partial class Form2
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
            this.textBox2 = new Mobilize.Web.TextBox();
            this.label2 = new Mobilize.Web.Label();
            this.textBox1 = new Mobilize.Web.TextBox();
            this.button1 = new Mobilize.Web.Button();
            this.label1 = new Mobilize.Web.Label();
            this.panel1 = new Mobilize.Web.Panel();
            this.label3 = new Mobilize.Web.Label();
            // 
            // textBox2
            // 
            this.textBox2.Location = new System.Drawing.Point(109, 47);
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(177, 20);
            this.textBox2.TabIndex = 9;
            // 
            // label2
            // 
            ;
                  this.label2.Font = new Mobilize.Web.Font("Microsoft Sans Serif", 12F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(7, 45);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(78, 20);
            this.label2.TabIndex = 8;
            this.label2.Text = "Password";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(109, 16);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(177, 20);
            this.textBox1.TabIndex = 7;
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.DarkBlue;
            this.button1.Font = new Mobilize.Web.Font("Microsoft Sans Serif", 14.25F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.button1.ForeColor = System.Drawing.Color.White;
            this.button1.Location = new System.Drawing.Point(11, 73);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(275, 36);
            this.button1.TabIndex = 6;
            this.button1.Text = "Login";
            this.button1.UseVisualStyleBackColor = false;
            // 
            // label1
            // 
            ;
                  this.label1.Font = new Mobilize.Web.Font("Microsoft Sans Serif", 12F, Mobilize.Web.FontStyle.Regular, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(7, 14);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(83, 20);
            this.label1.TabIndex = 5;
            this.label1.Text = "Username";
            // 
            // panel1
            // 
            this.panel1.BackColor = Mobilize.Web.SystemColors.ActiveCaption;
            this.panel1.Controls.Add(this.textBox2);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.textBox1);
            this.panel1.Controls.Add(this.button1);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Location = new System.Drawing.Point(12, 51);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(306, 115);
            this.panel1.TabIndex = 10;
            // 
            // label3
            // 
            ;
                  this.label3.Font = new Mobilize.Web.Font("Arial", 21.75F, Mobilize.Web.FontStyle.Bold, Mobilize.Web.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(125, 9);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(95, 34);
            this.label3.TabIndex = 11;
            this.label3.Text = "Login";
            // 
            // Form2
            // 
            ;
                  this.Controls.Add(this.label3);
                  this.Controls.Add(this.panel1);
                  this.Name = "HelloWorld.Form2";
                  this.Text = "Form2";

              }

              #endregion

        [Mobilize.WebMap.Common.Attributes.Intercepted]

        private Mobilize.Web.TextBox textBox2 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label2 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.TextBox textBox1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Button button1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Panel panel1 { get; set; }

        [Mobilize.WebMap.Common.Attributes.Intercepted]
        private Mobilize.Web.Label label3 { get; set; }
    }
}