import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 900);
  };

  return (
    <Section id="contact" eyebrow="// contact" title="Let's build something together" subtitle="Have a project, role, or idea? Drop me a line — I usually respond within 24 hours.">
      <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "haseeyaf@gmail.com" },
            { icon: Phone, label: "Phone", value: "+94 (077) 783-7299" },
            { icon: MapPin, label: "Location", value: "Remote · Worldwide" },
          ].map(c => (
            <div key={c.label} className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shrink-0">
                <c.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="glass rounded-2xl p-5">
            <div className="text-xs text-muted-foreground mb-3">Find me online</div>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl glass grid place-items-center hover:text-primary hover:scale-110 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Name</label>
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" maxLength={100} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Email</label>
              <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" maxLength={255} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">Message</label>
            <Textarea rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." maxLength={1000} />
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full bg-[image:var(--gradient-primary)] hover:opacity-90 border-0 shadow-elegant">
            {loading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
};
